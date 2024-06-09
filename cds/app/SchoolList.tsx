const SchoolList = () => {
    return (
        <div className="flex flex-col p-4">
            <div className="grid grid-cols-2 gap-x-10">
                <ul className="space-y-2">
                    <li><a href="#">White Whale</a></li>
                    <li><a href="#">Black Fox</a></li>
                    <li><a href="#">Blue Eagle</a></li>
                    <li><a href="#">Red Dragon</a></li>
                    <li><a href="#">Green Lion</a></li>
                    <li><a href="#">Yellow Wolf</a></li>
                </ul>
                
                <ul className="space-y-2">
                    <li>Blue, Dolphin</li>
                    <li>Purple, Owl</li>
                    <li>Orange, Monkey</li>
                    <li>Gray, Elephant</li>
                    <li>Brown, Bear</li>
                    <li>Pink, Fla</li>
                </ul>
            </div>
        </div>
    );
};

export default SchoolList;