export interface IAuth {
    email: string,
    password: string
}

export interface IUserState {
    email: string | null,
    name: string | null,
    dob: Date | null,
    token: string | null
    loggedIn: boolean
}

export interface ITitle {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

export interface IUrl {
    value: string;
    matchLevel: string;
    matchedWords: string[];
    fullyHighlighted?: boolean;
}

export interface IAuthor {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface IStoryText {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

export interface ICommentText {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

export interface IStoryTitle {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface IStoryUrl {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface IHighlightResult {
    title: ITitle;
    url: IUrl;
    author: IAuthor;
    story_text: IStoryText;
    comment_text: ICommentText;
    story_title: IStoryTitle;
    story_url: IStoryUrl;
}

export interface IHit {
    created_at: Date;
    title: string;
    url: string;
    author: string;
    points?: number;
    story_text: string;
    comment_text: string;
    num_comments?: number;
    story_id?: number;
    story_title: string;
    story_url: string;
    parent_id?: number;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: IHighlightResult;
    relevancy_score?: number;
}

export interface RenderingContent {
}

export interface INews {
    hits: IHit[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    exhaustiveTypo: boolean;
    query: string;
    params: string;
    renderingContent: RenderingContent;
    processingTimeMS: number;
}


