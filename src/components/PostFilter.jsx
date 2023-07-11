import MySelect from "./UI/select/MySelect"
import MyInput from "./UI/input/MyInput"

const PostFilter = ({ filter, setFilter }) => {

  return (
    <>
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" }
        ]}
      />
    </>
  )
}

export default PostFilter
