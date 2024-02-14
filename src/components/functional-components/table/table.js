import ImageComponent from "../image/image"


function TableComponent(){
    return(
        <table border={2}>
            <tr>
                <th>image</th>
                <th>image</th>
                <th>image</th>
            </tr>
            <tr>
                <td><ImageComponent/></td>
                <td><ImageComponent/></td>
                <td><ImageComponent/></td>
            </tr>
            <tr>
                <td><ImageComponent/></td>
                <td><ImageComponent/></td>
                <td><ImageComponent/></td>
            </tr>
        </table>
    )
}
export default TableComponent

