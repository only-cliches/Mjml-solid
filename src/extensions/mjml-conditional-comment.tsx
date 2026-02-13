import { JSX, Show } from "solid-js";

interface IMjmlConditionalComment {
  condition?: string;
  comment?: string;
}

// export class MjmlConditionalComment extends Component<IMjmlConditionalComment> {
//   render() {
//     const { children, condition = "if gte mso 9", ...rest } = this.props;
//     if (children && children.toString().trim().length) {
//       return (
//         <MjmlComment {...rest}>
//           {`[${condition}]>${children}<![endif]`}
//         </MjmlComment>
//       );
//     }
//     return null;
//   }
// }

export function MjmlConditionalComment(
  props: IMjmlConditionalComment
): JSX.Element {
  const { comment, condition = "if gte mso 9" } = props;

  return (
    <Show when={comment && comment.toString().trim().length}>
      <mj-raw
        textContent={`<!--[${condition}]>${comment}<![endif]-->`}
      ></mj-raw>
    </Show>
  );
}
