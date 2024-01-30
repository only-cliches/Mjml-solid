import { JSX, Show } from "solid-js";

import { MjmlRaw } from "..";

// export class MjmlYahooStyle extends Component {
//   render() {
//     const { children, ...rest } = this.props;
//     if (children && children.toString().trim().length) {
//       return (
//         <MjmlRaw {...rest}>
//           <style>{`@media screen yahoo {${children}}`}</style>
//         </MjmlRaw>
//       );
//     }
//     return null;
//   }
// }

export function MjmlYahooStyle(props: any): JSX.Element {
  const { children, ...rest } = props;

  return (
    <Show when={children && children.toString().trim().length}>
      <MjmlRaw {...rest}>
        <style>{`@media screen yahoo {${children}}`}</style>
      </MjmlRaw>
    </Show>
  );
}
