declare module '*.css' {
  interface IClassNames {
    readonly [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
