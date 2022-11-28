const RepoList = ({ data }) => {
    console.log(data);
    return (
      <div className="card reposArea">
          {data.map((singleRepo, idx) => {
            return (
                <a href={singleRepo.html_url} target="_blank" rel="noreferrer">
                    <div key={idx} className="repo">{singleRepo.name}</div>
                </a>
            );
          })}
      </div>
    )
  }
  
  export default RepoList;