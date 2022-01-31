import React from "react";
import { useState, useEffect } from "react";
import { SimpleGrid, LoadingOverlay } from "@mantine/core";

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
            <SimpleGrid cols={3}>
                <div>{sticky[0].author} + {sticky[0].body}</div>
                <div>{sticky[1].author} + {sticky[1].body}</div>
                <div>{sticky[2].author} + {sticky[2].body}</div>
                <div>{sticky[3].author} + {sticky[3].body}</div>
                <div>{sticky[4].author} + {sticky[4].body}</div>
                <div>{sticky[5].author} + {sticky[5].body}</div>
                <div>{sticky[6].author} + {sticky[6].body}</div>
                <div>{sticky[7].author} + {sticky[7].body}</div>
                <div>{sticky[8].author} + {sticky[8].body}</div>
            </SimpleGrid>
        );
    }
}

export default App;