import React, {PureComponent} from "react";

class PureComp extends PureComponent {
    render() {
        return(
            <div>
                i am the pure component {this.props.name}
            </div>
        )
    }
}
export default PureComp