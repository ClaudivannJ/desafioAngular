export interface User {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    html_url:string;
    company?:string;
    location?: string;
    email?: string;
    blog?: string;
    twitter_username?: string;
    followers: number;
    following: number;
    public_repos:number;
}