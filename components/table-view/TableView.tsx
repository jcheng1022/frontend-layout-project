import DraggableTableView from "./DraggableTableView";

const TableView = () => {
    return (
        <div className="flex flex-col gap-4 p-24">
            <h1>Table View</h1>
            <div className='my-4'/>
            <DraggableTableView/>
        </div>
    )
}

export default TableView;