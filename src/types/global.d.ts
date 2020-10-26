declare module '*.css'
declare module '*.png'
declare module '*.svg'
declare module '*.tsx'
declare module '*.ts'
declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}
