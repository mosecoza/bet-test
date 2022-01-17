import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/slices/news/news-actions';
import { createMarkup, getNewsApi } from '../../utils/functions';
import { IHit, INews, INewsRequest } from '../../utils/interfaces';



const  LandingPage: React.FC<ILandingPage> =(props)=> {
    console.log("LandingPage props: ", props);
    
    const [current, setCurrent] = useState<number>(props.news? props.news.page:0);
    const [error, setError] = useState<string | null>();
    const [searchString, setSearchString] = useState("");
    let live = true;

    useEffect(() => {
        if (live) {
            props.getNews({searchString:'microfrontend',page:1});
        }
        return () => {
            live = false;
        }
    }, []);

    function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchString(event.currentTarget.value);
    }

    function submitQuery(e: any) {
        e.preventDefault();
        if (searchString) {
            setCurrent(1);
            props.getNews({searchString:searchString,page:current});
        }
    }

    function clearInput() {
        setSearchString('');
    }

    return (
        <div style={{ maxHeight: "100vh" }} className="container overflow-x-hidden overflow-y-hidden min-vh-100 min-vw-100 d-flex flex-column bg-gray-50">
            <div className='justify-between px-2 py-1 mx-1 my-2 bg-gray-100 d-flex align-items-center rounded-xl'>
                <h2 className="p-0 m-0 text-grey-darkest fw-bolder h2">Developer News</h2>
                <form className="mb-2" onSubmit={submitQuery}>
                    <input className="p-0 m-0 mx-1 border rounded" value={searchString} type="text" name="search" id="search" onChange={e => handleSearchInput(e)} />
                    <button className="m-0 mx-1 bg-yellow-500 rounded" type="submit">Search</button>
                    {searchString.length ?
                        <a onClick={clearInput}  className="inline-block p-0 px-2 py-1 m-0 mx-1 text-sm font-bold text-yellow-500 align-baseline hover:text-yellow-800" href="#">
                        clear input
                      </a>:
                        null
                    }
                </form>
            </div>
            {props.news?.hits?.length?
            <h2 className="p-0 m-0 text-center text-grey-darkest font-bolder lead">"{props.news.query}"</h2>
            :null}
            <div className='flex-grow px-2 py-4 my-2 overflow-y-scroll bg-white rounded-xl'>
                {props.isLoading ? <div className="font-bold text-orange-500 ">fetching results....</div> : <div className='p-2 bg-white '>
                    <ul className='mx-1'>
                        {props.news?.hits ? props.news.hits.map((entry, i) => {

                            return <li key={entry.objectID}>
                                <div className="mb-4 border-t border-yellow-500 ">
                                    {/* <pre>{JSON.stringify(entry, null, '\t')}</pre> */}
                                    <div className="flex flex-col justify-between p-4 leading-normal bg-white border-gray-400 rounded-b hover:text-indigo-900 lg:rounded-b-none lg:rounded-r">
                                        <div className="mb-2">

                                            <div className="mb-2 text-xl font-bold text-gray-900">

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
                                                    {(entry.url || entry.story_url) ? <a className='font-light text-yellow-500 align-baseline hover:text-yellow-800' href={(entry.url || entry.story_url)}>
                                                        {(entry.url || entry.story_url)}
                                                    </a> : null}
                                                    {/* {entry.url? <iframe width='100%' height="100%" src={entry.url} title={entry.title}></iframe>:null}
                                                    {entry.story_url ? <iframe width='100%' height="100%" src={entry.story_url} title={entry.story_title}></iframe>:null} */}
                                                </small>
                                                {/* <div className='flex my-1'>

                                            {entry._tags.length ? entry._tags.map(tag => <span key={tag} className="mr-1 badge badge-pill badge-primary">{tag}</span>) : null}
                                        </div> */}
                                                <p className="text-sm text-yellow-700"
                                                >Score: {entry.points}</p>

                                            </div>
                                            {entry.story_text ?
                                                <p className="text-gray-600 "
                                                    dangerouslySetInnerHTML={createMarkup(entry.story_text)}
                                                ></p>
                                                : null
                                            }
                                            {entry.comment_text ?
                                                <p className="text-gray-600 "
                                                    dangerouslySetInnerHTML={createMarkup(entry.comment_text)}
                                                ></p>
                                                : null
                                            }
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <p className="text-gray-900 ">By: <strong>{entry.author}</strong>

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
            <div className="font-bold text-red-500">{error ? error : null}</div>
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
  <div className="flex justify-between flex-1 sm:hidden">
    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Previous
    </a>
    <a href="#" className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Next
    </a>
  </div>
  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        Showing
        <span className="font-medium">1</span>
        to
        <span className="font-medium">10</span>
        of
        <span className="font-medium">97</span>
        results
      </p>
    </div>
    <div>
      <nav >
        <a href="#" className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
          <span className="sr-only">Previous</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
        {/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" --> */}
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50">
          1
        </a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50">
          2
        </a>
        
        <a href="#" className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">
          <span className="sr-only">Next</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>
        </div>
    );
}

export interface ILandingPage{
    name: string|null,
    token:string|undefined,
    news: INews|null,
    isLoading: boolean,
    getNews: (props:INewsRequest)=>void

}
const mapStateToProps = (state:any) => {
    return {
        name: state.user.loggedIn,
        token: state.user.token,
        news: state.news.news,
        isLoading: state.news.isLoading
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        getNews: (props:INewsRequest) => {
            dispatch(getNews(props))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);