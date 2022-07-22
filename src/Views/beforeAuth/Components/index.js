import React from "react";

// Components
import Navbar from "../../../Components/Navbar/Navbar";
import Button from "../../../Components/Button/Button";
import FeatureCard from "../../../Components/FeatureCard/FeatureCard";
import Footer from "../../../Components/Footer/Footer";
import HrLine from "../../../Components/HrLine/HrLine";
import Input from "../../../Components/Input/Input";

export const Components = () => {
    return (
        <React.Fragment>
            <Navbar />
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
            Card
            <FeatureCard
                t1="Title1"
                t2="Title2"
                t3="Title3"
                gradient=""
                id={2}
            />
            <br />
            Responsive Footer
            <Footer />
            <br />
            <HrLine title="Test Line" />
            <br />
            <Input inputtype="" isred={false} placeholder="Enter details..." />
        </React.Fragment>
    )
}

export default Components;