import React from "react";
import PropTypes from "prop-types";

// export class Navbar extends Component{

//  //set default class component props
//  static defaultProps = {
//     title: 'Default title'
//   }
//   static propTypes = {
//       title: PropTypes.string.isRequired
//   }
//     render(){
//         return (
//             <nav className="navbar bg-primary">
//                 <h1>
//                 {this.props.title}
//                 </h1>
//             </nav>
//         )
//     }
// }

export const Navbar = ({ title, slug }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
      <p>{slug}</p>
    </nav>
  );
};

//set default functional component props
//static becomes the name of Component in this case Navbar
Navbar.defaultProps = {
  title: "Default title",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
