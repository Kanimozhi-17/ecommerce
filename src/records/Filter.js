
function Filter(onApplyFilter){
    // const [filterclick, setFilterClick]=useState(true);

    // const filerRemove =()=>{
    //     setFilterClick(false);
    //     alert("Click")
    // }

    const colorCheckBox=[{id:"b1",name:"red",label:"Red"},
        {id:"b2",name:"white",label:"White"},
        {id:"b3",name:"black",label:"Black"},
        {id:"b4",name:"blue",label:"Blue"},
        {id:"b5",name:"yellow",label:"Yellow"},
        {id:"b6",name:"pink",label:"Pink"}
    ]

    const [checkedItems, setCheckedItems] = useState(
        colorCheckBox.reduce((acc, color) => {
            acc[color.name] = false;
            return acc;
        }, {})
    );

    const handleChange = (event) => {
        const { name, checked } = event.target;

        setCheckedItems((prevState) => ({
            ...prevState,
            [name]: checked, 
        }));
    };

    const applyFilter = () => {
        const selectedColors = Object.keys(checkedItems).filter((key) => checkedItems[key]);
        onApplyFilter(selectedColors); // Send selected colors to Products component
    };

return(
    <div className="filer_content">
        <h4>Filter</h4>

        <section>
        <p>Brand</p>
        <div className="button_flex">
        <button>All</button>
        <button>Nike</button>
        <button>Puma</button>
        <button>Adidas</button>
        <button>Casuals</button>
        </div>
        </section>

        <section>
            <p>Gender</p>
        <div className="button_flex">
            <button>Male</button>
            <button>Female</button>
            <button>All</button>
        </div>
        </section>


        <section>
            <p>Color</p>
            {colorCheckBox.map((check)=>{
                return(
                    <label htmlFor={check.id}>
                    <input type="checkbox" id={check.id}
                    name={check.name}
                    checked={checkedItems[check.name] || false}
                    onChange={handleChange}
                    />
                     {` ${check.label}`}
                    </label>
                )
            })}
        </section>

      <button className="confirm_btn" onClick={applyFilter}>Confirm</button>
    </div>
)
}