export class Class {
    constructor(
      public id: string,
      public name: string,
      public description: string,
      public children?: Class[]
    ) {}
  }