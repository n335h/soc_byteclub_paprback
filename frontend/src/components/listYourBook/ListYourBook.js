import ListYourBookInput from "../listYourBookInput/ListYourBookInput";
import ListYourBookOutput from "../listYourBookOutput/ListYourBookOutput";

function ListYourBook(){
    return(
        <div>
            <h1>List Your Book</h1>
            <ListYourBookInput />
            <ListYourBookOutput />
        </div>
    )
}

export default ListYourBook;