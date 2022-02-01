import React from "react"
import { useState, useEffect } from "react"
import { SimpleGrid, LoadingOverlay } from "@mantine/core"

type Sticky = {
    author: string
    body: string
    created: bigint
}

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [sticky, setSticky] = useState<Array<Sticky>>([]);

    useEffect(() => {
        const getData = async () => {
            await fetch("http://localhost:8080/frontPage", {
                method: "GET",
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .then(function(data) {
                    setSticky(data);
                    setLoading(false);
                })
        };
        getData();
    }, []);

    if (loading) {
        return (<LoadingOverlay visible={loading}/>);
    } else {
        return (
            <SimpleGrid cols={3} className="stickyGrid">
                <div className="stickyDiv">input: enter name<br/><br/>input: enter text</div>
                <div className="stickyDiv">{sticky[0].author}<br/><br/>{sticky[0].body}</div>
                <div className="stickyDiv">{sticky[1].author}<br/><br/>{sticky[1].body}</div>
                <div className="stickyDiv">{sticky[2].author}<br/><br/>{sticky[2].body}</div>
                <div className="stickyDiv">{sticky[3].author}<br/><br/>{sticky[3].body}</div>
                <div className="stickyDiv">{sticky[4].author}<br/><br/>{sticky[4].body}</div>
                <div className="stickyDiv">{sticky[5].author}<br/><br/>{sticky[5].body}</div>
                <div className="stickyDiv">{sticky[6].author}<br/><br/>{sticky[6].body}</div>
                <div className="stickyDiv">{sticky[7].author}<br/><br/>{sticky[7].body}</div>
            </SimpleGrid>
        );
    }
}

export default App;