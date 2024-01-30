import { JSX } from "solid-js";

interface IMjmlHtml {
  //tag?: string;
  html: string;
}

// export class MjmlHtml extends Component<IMjmlHtml> {
//   render() {
//     const { tag = "mj-raw", html } = this.props;
//     return React.createElement(tag, {
//       dangerouslySetInnerHTML: {
//         __html: html,
//       },
//     });
//   }
// }

export function MjmlHtml(props: IMjmlHtml): JSX.Element {
  const { html } = props;
  return <mj-raw innerHTML={html} />;
}
