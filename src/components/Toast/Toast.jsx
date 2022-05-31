import React from "react";

export default (props) => {
    const {toast, title, description, status} = props;
    return (
        toast({
            title: title,
            description: description,
            status: status,
            duration: 9000,
            isClosable: true
        })
    );
}