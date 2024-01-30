export default function Cartitem({item}) {
    return (
        <div>
            <li> {item.name} - ${item.price}</li>
        </div>
    )
}