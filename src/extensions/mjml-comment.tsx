import { JSX, Show } from "solid-js";

// import { convertPropsToMjmlAttributes } from "../utils";

// export class MjmlComment extends Component {
//   render() {
//     const { children, ...rest } = this.props;
//     if (children && children.toString().trim().length) {
//       return React.createElement("mj-raw", {
//         ...convertPropsToMjmlAttributes(rest),
//         dangerouslySetInnerHTML: {
//           __html: `<!--${children}-->`,
//         },
//       });
//     }
//     return null;
//   }
// }

export function MjmlComment(props: { comment?: string }): JSX.Element {
  return (
    <Show when={props.comment && props.comment.toString().trim().length}>
      <mj-raw
        innerHTML={`<!--${props && props.comment ? props.comment : ""}-->`}
      ></mj-raw>
    </Show>
  );
}
