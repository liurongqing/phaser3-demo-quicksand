import { Keys } from '~/consts/index'
import Quicksand from '~/controllers/Quicksand'
const DUDE_KEY = 'dude'
export default class Game extends Phaser.Scene {
  cursors: any
  player: any
  quicksand: any
  constructor() {
    super(Keys.GameScene)
  }

  create() {
    const { width, height } = this.scale
    this.add.image(width * 0.5, height * 0.5, 'sky')

    this.quicksand = new Quicksand(this, 400, height, 100, 32 * 3)
    this.add.image(400, this.scale.height, 'platform-quicksand').setScale(1, 3)
      .setOrigin(0, 1)

    const platforms = this.createPlatforms()
    this.player = this.createPlayer()
    this.physics.add.collider(this.quicksand.display, this.player, this.quicksand.handleCollidePlayer, null, this.quicksand)

    this.physics.add.collider(this.player, platforms)

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    this.quicksand.update()
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160)
      this.player.anims.play('left', true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160)
      this.player.anims.play('right', true)
    } else {
      this.player.setVelocityX(0)
      this.player.anims.play('turn')
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-300)
    }


  }

  createPlayer() {
    const player = this.physics.add.sprite(450, 450, DUDE_KEY)
    player.setBounce(0.2)
    player.setCollideWorldBounds(true)
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [{ key: DUDE_KEY, frame: 4 }],
      frameRate: 20
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })

    return player
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup()
    platforms.create(0, this.scale.height, 'platform')
      .setScale(1, 3)
      .setOrigin(0, 1)
      .refreshBody()



    platforms.create(500, this.scale.height, 'platform')
      .setScale(1, 3)
      .setOrigin(0, 1)
      .refreshBody()

    return platforms


  }
}
