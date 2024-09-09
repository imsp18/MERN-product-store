import { Container } from "@chakra-ui/react"
import { useState } from "react"

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    })
    return (
        <Container> 
            CreatePage
        </Container>
    )
}

export default CreatePage
