import "../styles/ImportantDates.css";

function ImportantDates() {
    return (
        <div className="ImpDate">
            <h2>Important Dates</h2>
            <div className="id-table">
                <table>
                    <tr>
                        <td>Abstract Submission Date</td>
                        <td className="id-date">2026-01-20</td>
                    </tr>
                    <tr>
                        <td>Full Paper Submission Date</td>
                        <td className="id-date">2026-02-27</td>
                    </tr>
                    <tr>
                        <td>Notification of Acceptance Date</td>
                        <td className="id-date">2026-03-31</td>
                    </tr>
                    <tr>
                        <td>Final Paper Submission Date</td>
                        <td className="id-date">2026-04-30</td>
                    </tr>
                </table>
            </div>
            <div className="id-pap">
                <h3>PROCEEDINGS AND PUBLICATIONS</h3>
                <ul>
                    <li>All the accepted papers will be published in the proceedings. In addition to this the selected paper will be published in the journal. Please refer to website for more details on paper submission.</li>
                    <li><span>Best Paper award</span> - The best paper in each session will be awarded.</li>
                    <li>Keynote addresses will be delivered by National and International Renowned persons. Invited talks per session will be more subject & domain focused relevant topics.</li>
                </ul>
            </div>
        </div>
    );
}

export default ImportantDates;