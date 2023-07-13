import cn from "./MyPagination.module.css"

const MyPagination = ({ countPages, page, setPage }) => {
  const pagesArray = []
  for (let i = 0; i < countPages; i++) {
    pagesArray.push(i + 1)
  }
  return (
    <div className={cn.pagination}>
      {pagesArray.map((p) => (
        <span
          onClick={() => {
            setPage(p)
          }}
          key={p}
          className={p === page ? cn.active : ""}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default MyPagination
