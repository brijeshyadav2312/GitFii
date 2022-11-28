const Detail = ({data}) => {
    console.log(data);
    return (
      <div className="card detail">
        <div className="profileArea">
            <img src={data.avatar_url} alt="Profile" />
            <p>{data.location}&nbsp;📍</p>
            <h3 className="profileName">{data.name}</h3>
            <h3 className="userName"><span>@</span>{data.login}</h3>
        </div>
        <div className="buttonArea">
            <button>{data.public_repos}<p>Repositories</p></button><br/>
            <button>{data.followers}<p>followers</p></button><br/>
            <button>{data.following}<p>following</p></button><br/>
        </div>
      </div>
    )
  }
  
  export default Detail;