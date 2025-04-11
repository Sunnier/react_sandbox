const Pic = ({ id, title }) => (
  <figure>
    <div className="pic">
      <img width={600} height={400} alt={title} src={`https://picsum.photos/id/${id}/600/400`} />
    </div>
    <div className="description">{title}</div>
  </figure>
);

export default Pic;
