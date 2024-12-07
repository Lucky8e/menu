import MenuItem from "./MenuItem"

const Menu = ({menu}) => {
  return (
    <div className="section-center">
        {menu.map((menu)=>{
            return <MenuItem key={menu.id} {...menu} />
        })}
    </div>
  )
}
export default Menu