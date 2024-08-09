import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("EASY");
    const [image, setImage] = useState(null);

    const handleChangeFile = () => {};
    return (
        <div className="quiz-container">
            <div className="title">Manage Quizzes</div>
            <hr />
            <div className="add-new">
                <fieldset className="border rounded-3 p-2">
                    <legend className="float-none w-auto px-3">
                        Add new quiz
                    </legend>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="name@example.com"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Description</label>
                    </div>
                    <div className="my-3">
                        <Select options={options} placeholder={"Quiz type"} />
                    </div>
                    <div className="more-actions form-group">
                        <label htmlFor="" className="mb-1">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={(e) => handleChangeFile(e.target.value)}
                        />
                    </div>
                </fieldset>
            </div>
            <div className="list-detail">table</div>
        </div>
    );
};

export default ManageQuiz;
