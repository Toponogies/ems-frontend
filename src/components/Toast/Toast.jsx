export default (props) => {
    const {toast, title, description, status} = props;
    return (
        toast({
            title: title,
            description: description,
            status: status,
            duration: 3500,
            isClosable: true
        })
    );
}