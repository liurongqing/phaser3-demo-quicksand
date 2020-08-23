export default class Quicksand {
  private display: Phaser.GameObjects.Rectangle
  private touchingPlayer: Phaser.Physics.Arcade.Sprite

  constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number) {
    this.display = scene.add.rectangle(x, y, width, height, 0, 0)
      .setOrigin(0, 1)

    scene.physics.add.existing(this.display, true)
  }

  handleCollidePlayer(obj: Phaser.GameObjects.GameObject, player: Phaser.Physics.Arcade.Sprite) {
    if (this.touchingPlayer) return
    this.touchingPlayer = player
    this.touchingPlayer.setBounce(0)
  }

  changeCollisionBoxBy(diff: number) {
    const body = this.display.body as Phaser.Physics.Arcade.StaticBody
    if (diff > 0 && body.height >= this.display.height) return
    if (diff < 0 && body.height <= 0) return
    body.setSize(body.width, body.height + diff)
    body.setOffset(0, this.display.height - body.height)
    if (this.touchingPlayer)
      this.touchingPlayer.y -= diff
  }

  update() {
    if (!this.touchingPlayer) return
    let change = -0.5

    const rect = this.display.getBounds()
    const playerRect = this.touchingPlayer.getBounds()
    const overlapping = Phaser.Geom.Rectangle.Overlaps(rect, playerRect)

    const touching = !this.touchingPlayer.body.touching.none
    const wasTouching = !this.touchingPlayer.body.wasTouching.none
    const jumpingOrFalling = this.touchingPlayer.body.velocity.y < 0 || this.touchingPlayer.body.velocity.y > 10
    if (overlapping && jumpingOrFalling) {
      change = 0.5
    }

    this.changeCollisionBoxBy(change)

    if (this.touchingPlayer.body.velocity.y < -100) {
      this.touchingPlayer.setVelocityY(-100)
    }

    if (!overlapping && (!touching && !wasTouching)) {
      this.touchingPlayer = undefined
      const body = this.display.body as Phaser.Physics.Arcade.StaticBody
      this.changeCollisionBoxBy(this.display.height - body.height)
    }


  }
}
