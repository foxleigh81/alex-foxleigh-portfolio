declare module '*.md' {
  const content: string
  export = content;
}
interface SvgrComponent
  extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const ReactComponent: SvgrComponent;

  export { ReactComponent };
}