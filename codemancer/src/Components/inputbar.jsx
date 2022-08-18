import "../css/inputbar.css";
import {
    useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton, Button, Select
} from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Input
  } from '@chakra-ui/react'
  import { useEffect,useState } from 'react';

export const Inputbar = ({setPostdata, postdata}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const current = new Date();
    const time = current.toLocaleString();

    const [searchtext, setSearchText] = useState("hello")
    
    const [gifs, setGifs] = useState([])
    const [data, seData] = useState({
        "img": "null",
        "text" : "",
        "time" : time
    })
    useEffect(() => {
        getdata()
    }, [searchtext])
    

    const getdata = () => {
        setGifs([])
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=Sw5qxCIDBmVT8Jlw1zLmRrIn6ZwmAzVQ&q=${searchtext}&limit=25&offset=0&rating=g&lang=en`)
        .then(response => response.json())
            .then((data) => {
                // console.log(data.data)
                setGifs(data.data)
            })
        .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="Inputbar">
            <div className='avtar-head' >
                <div className='avatar' >
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                </div>
                <input className="textarea" type="text" placeholder="What is in your mind ?" onClick={onOpen} />
            </div>
            <div className="buttons-div">
                    <button> Public</button>
                    <button style={{ backgroundColor: "#21618C", color : "white" , margin: "5px 10px"}} onClick={onOpen} >Post</button>
            </div>
            <Modal isOpen={isOpen} size="xl" onClose={onClose}>
                <ModalOverlay />
                <ModalContent p="10px" >
                    <ModalHeader>Compose Post</ModalHeader>
                    <div className='avtar-head' >
                        <div className='avatar' >
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                        </div>
                        <input className="textarea" type="text" placeholder="What is in your mind ?" id="text" onChange={(e) => seData({ ...data, "text": e.target.value }) } />
                    </div>
                    <div className='gif-div' >
                        {data.img == "null" ? null : <img src={data.img} alt="" />}
                    </div>
                    <ModalCloseButton />
                    <ModalBody w="800px" >
                        {/* <Lorem count={2} /> */}
                        <div className="tags">
                            <div className="flex-div">
                                <Button w="50%" m="0 10px 0 10px" >Tag Friends</Button>
                                <Button w="50%" m="0 10px 0 10px" >Check in</Button>
                            </div>
                            <div className="flex-div">
                                <Popover>
                                    <PopoverTrigger>
                                        <Button w="50%" m="0 10px 0 10px" >GIF</Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>
                                            <Input w="80%" placeholder='Search GIF' onChange={(e) => setSearchText(e.target.value)} />
                                        </PopoverHeader>
                                        <PopoverBody>
                                
                                            <div  className="gif-container">
                                             {gifs?.map((e,i) => {
                                                return (
                                                    <div key={i} >
                                                        <img id="img" onClick={() => seData({ ...data, "img": e.images.original.url }) } src={e.images.original.url} alt="gif" />
                                                    </div>
                                                )
                                            })}
                                            </div>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <Button w="50%" m="0 10px 0 10px" >Tag Event</Button>
                            </div>
                        </div>
                    </ModalBody>
        
                    <ModalFooter>
                    <Select w="120px" mr="10px" placeholder='Only me'>
                        <option value='option1'>Friends</option>
                        <option value='option2'>Public</option>
                    </Select>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            setPostdata([
                                data,
                                ...postdata
                            ]
                            )
                            onClose()
                            seData({
                                ...data,
                                "img": "null",
                                "text" : "",
                            })
                        }} >
                        Post
                    </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}