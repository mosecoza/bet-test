import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { createMarkup, getApi } from '../../utils/functions';
import { IHit, INews } from '../../utils/interfaces';



function LandingPage() {
    let live = true;
    const [hits, setHits] = useState<IHit[]>();
    const [news, setNews] = useState<INews>();
    const [current, setCurrent] = useState<number>(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>();
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        if (live) {
            FetchNews();
        }
        return () => {
            live = false;
        }
    }, [])


    async function FetchNews(searchValue?: string) {
        const requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow",

        };
        let response: INews | null;

        if (searchValue) {
            response = await getApi(`query=${searchValue}&page=${current}`, requestOptions)
        } else {
            response = await getApi(`query=microfrontend`, requestOptions)
        }

        console.log("FetchNews : ", response);

        if (response) {
            setLoading(false);
            setHits(response.hits);
            setNews(response);
            setCurrent(response.page)
        } else {
            setLoading(false);
            setError("Failed To Fetch");
        }
    }



    function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchString(event.currentTarget.value);
    }

    function submitQuery(e: any) {
        e.preventDefault();
        if (searchString) {
            setLoading(true);
            setCurrent(1);
            FetchNews(searchString);
        }
    }

    function clearInput() {
        setSearchString('');
    }

    return (
        <div style={{ maxHeight: "100vh" }} className="container-fluid min-vh-100 min-vw-100  overflow-x-hidden overflow-y-hidden d-flex flex-column bg-gray-50">
            <div className='d-flex justify-between align-items-center bg-gray-100 my-2 mx-1 px-2 py-1 rounded-xl'>
                <h2 className="text-grey-darkest font-bolder m-0 p-0">Developer News</h2>
                <form className="mb-2" onSubmit={submitQuery}>
                    <input className="border mx-1 p-0 m-0 rounded" value={searchString} type="text" name="search" id="search" onChange={e => handleSearchInput(e)} />
                    <button className="bg-yellow-500 rounded mx-1 m-0" type="submit">Search</button>
                    {searchString.length ?
                        <button className="bg-teal-500 mx-1 px-2 py-1 p-0 m-0 text-yellow-400 rounded " onClick={clearInput} type='button'>clear input</button> :
                        null
                    }
                </form>
            </div>
            <h2 className="text-grey-darkest font-bolder m-0 p-0 text-center">"{news?.query}"</h2>
            <div className='my-2 px-2 py-4 flex-grow overflow-y-scroll '>
                {loading ? <div className=" font-bold text-orange-500 ">fetching results....</div> : <div className='bg-white p-2 rounded-md'>
                    <ul className='mx-1'>
                        {hits ? hits.map((entry, i) => {

                            return <li key={entry.objectID}>
                                <div className=" mb-4 border-t border-yellow-500">
                                    {/* <pre>{JSON.stringify(entry, null, '\t')}</pre> */}
                                    <div className=" hover:text-indigo-900  border-gray-400  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-2">

                                            <div className="text-gray-900 font-bold text-xl mb-2">

                                                {entry.title ?
                                                    <h6>
                                                        {entry.title}
                                                    </h6> : null
                                                }
                                                {entry.story_title ?
                                                    <h6>
                                                        {entry.story_title}
                                                    </h6> : null
                                                }
                                                <small className='text-gray-500'>
                                                    {(entry.url || entry.story_url) ? <a className='text-grey-400 font-light' href={(entry.url || entry.story_url)}>
                                                        {(entry.url || entry.story_url)}
                                                    </a> : null}
                                                    {/* {entry.url? <iframe width='100%' height="100%" src={entry.url} title={entry.title}></iframe>:null}
                                                    {entry.story_url ? <iframe width='100%' height="100%" src={entry.story_url} title={entry.story_title}></iframe>:null} */}
                                                </small>
                                                {/* <div className='flex my-1'>

                                            {entry._tags.length ? entry._tags.map(tag => <span key={tag} className="badge badge-pill badge-primary mr-1">{tag}</span>) : null}
                                        </div> */}
                                                <p className="text-yellow-700 text-sm"
                                                >Score: {entry.points}</p>

                                            </div>
                                            {entry.story_text ?
                                                <p className="text-gray-600"
                                                    dangerouslySetInnerHTML={createMarkup(entry.story_text)}
                                                ></p>
                                                : null
                                            }
                                            {entry.comment_text ?
                                                <p className="text-gray-600"
                                                    dangerouslySetInnerHTML={createMarkup(entry.comment_text)}
                                                ></p>
                                                : null
                                            }
                                        </div>
                                        <div className="flex items-center text-sm justify-between">
                                            <p className="text-gray-900 leading-none">By: <span className='text-indigo-600'>{entry.author}</span>

                                            </p>
                                            <p className="text-gray-600">Date: {moment(entry.created_at).fromNow()}</p>
                                        </div>
                                        
                                    </div>
                                    {/* <a className="text-indigo-600 rk hover:text-indigo-900" href={entry.url}> {`${i + 1}-${entry.title}`}</a> */}

                                </div>
                            </li>
                        }) : null}
                    </ul>
                </div>
                }
            </div>
            <div className="text-red-500 font-bold">{error ? error : null}</div>
            <nav aria-label="Page navigation example my-1">
                <ul className="pagination justify-content-end">
                    {news?.nbPages}
                    <li className="page-item disabled">
                        <a className="page-link" href="#" >Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LandingPage;