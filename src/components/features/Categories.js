import { useSelector } from "react-redux";
import { getCategories } from "../../redux/categoriesRedux";
import { Link } from "react-router-dom";


const Categories = () => {

  const selectCategory = useSelector(state => getCategories(state));


  return (
    <div>
      <h3 className="mt-5">All categories</h3>
      <ul>
        {selectCategory.map(category => (
          <li key={category.id}><Link to={`/categories/${category.name}`}>{category.name}</Link></li>
        ))}

      </ul>
    </div>
  )
}

export default Categories;