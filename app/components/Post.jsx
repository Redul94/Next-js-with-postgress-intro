import DeletePostBtn from "./Delete";

export default function Post({id,tittle,content,authorName}){
    return (
        <div style={{border: '1px solid white',padding:'15px',margin:'10px'}}>
            <h3>
                {authorName}
            </h3>
            <h4>
                {tittle}
            </h4>
            <p>
                {content}
            </p>
            <DeletePostBtn postId={id}/>
        </div>
    )
}