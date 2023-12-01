import React from 'react'
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { data, columns } from './userlist';

const Userlistcom = () => {
	function convertArrayOfObjectsToCSV(array) {
		let result;

		const columnDelimiter = ",";
		const lineDelimiter = "\n";
		const keys = Object.keys(data[0]);

		result = "";
		result += keys.join(columnDelimiter);
		result += lineDelimiter;

		array.forEach((item) => {
			let ctr = 0;
			keys.forEach((key) => {
				if (ctr > 0) result += columnDelimiter;

				result += item[key];

				ctr++;
			});
			result += lineDelimiter;
		});

		return result;
	}

	// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
	function downloadCSV(array) {
		const link = document.createElement("a");
		let csv = convertArrayOfObjectsToCSV(array);
		if (csv == null) return;

		const filename = "export.csv";

		if (!csv.match(/^data:text\/csv/i)) {
			csv = `data:text/csv;charset=utf-8,${csv}`;
		}

		link.setAttribute("href", encodeURI(csv));
		link.setAttribute("download", filename);
		link.click();
	}

	const Export = ({ onExport }) => (
		<Button onClick={(e) => onExport(e.target.value)}>Export</Button>
	);
	const actionsMemo = React.useMemo(
		() => <Export onExport={() => downloadCSV(data)} />,
		[]
	);
	const [selectedRows, setSelectedRows] = React.useState([]);
	const [toggleCleared, setToggleCleared] = React.useState(false);
	let selectdata = [];
	const handleRowSelected = React.useCallback((state) => {
		setSelectedRows(state.selectedRows);
	}, []);
	const contextActions = React.useMemo(() => {
		const Selectdata = () => {
			if (window.confirm(`download:\r ${selectedRows.map((r) => r.SNO)}?`)) {
				setToggleCleared(!toggleCleared);
				data.map((e) => {
					selectedRows.map((sr) => {
						if (e.SNO === sr.SNO) {
							selectdata.push(e);
						}
						return sr;
					});
					return e;
				});
				downloadCSV(selectdata);
			}
		};
		return <Export onExport={() => Selectdata()} icon="true" />;
	}, [data, selectdata, selectedRows]);
  return (
    <div>
        <Row className=" row-sm">
				<Col lg={12}>
					<Card className="custom-card">
						<Card.Body>
							<div className="table-responsive ">
								<span className="datatable">
									<span className="uselistdata">
										
											<DataTable
												columns={columns}
												data={data}
												actions={actionsMemo}
												contextActions={contextActions}
												onSelectedRowsChange={handleRowSelected}
												clearSelectedRows={toggleCleared}
												defaultSortField="SNO"
												defaultSortAsc={false}
												selectableRows
												pagination
											/>
										
									</span>
								</span>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
    </div>
  )
}

export default Userlistcom