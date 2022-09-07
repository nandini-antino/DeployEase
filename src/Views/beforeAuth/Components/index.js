import React from "react";

// Components
import Button from "../../../Components/Button/Button";
import HrLine from "../../../Components/HrLine/HrLine";

export const Components = () => {
    return (
        <React.Fragment>
            Full size button when loading
            <Button title="Submit" type="action" loading={true} />
            <br />
            normal button
            <br />
            <Button title="Submit" type="" loading={true} />
            <br />
            Full size button
            <Button title="Submit" type="action" loading={false} />
            <br />
            <HrLine title="Test Line" />
            <br />
        </React.Fragment>
    )
}

export default Components;