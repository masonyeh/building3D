export default class Ground{
  private static instance:Ground


  public static getInstance() {
    if (!Ground.instance) {
      Ground.instance = new Ground()
    }
    return Ground.instance;
  }

}