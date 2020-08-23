import { Keys } from "~/consts/index";

export default class Preloader extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  constructor() {
    super(Keys.PreloadScene)
  }
  preload() {
    this.load.image('sky', 'assets/images/sky.png')
    this.load.image('platform', 'assets/images/platform.png')
    this.load.image('platform-quicksand', 'assets/images/platform_quicksand.jpg')
    this.load.spritesheet('dude',
      'assets/images/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    )
  }
  create() {
    this.scene.start(Keys.GameScene)
  }
  update() { }
}
