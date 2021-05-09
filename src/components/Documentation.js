import React from 'react';
import docs from "../images/docs_header.png";
import {Table, Container} from 'react-bootstrap';
export default function Documentation() {
    const tableStyle = {
        marginBottom:"28em",
        height:"100%",
    }
    return (
        <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4em",
            marginBottom:"3em",
          }}
        >
          <img src={docs} alt="" />
        </div>
        <Container>
        <Table striped bordered hover style={tableStyle}>
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/wiki-read</td>
      <td>Give a wiki article title to the bot; the bot will read it and learn it using AI (command can be used via dm or in a channel).</td>
    </tr>
    <tr>
      <td>/wiki-article</td>
      <td>Shows and DM you the current wiki article bot is reading.</td>
    </tr>
    <tr>
      <td>/wiki-qna</td>
      <td>Ask wiki any question about the article it is currently reading (see /wiki-read).</td>
    </tr>
    <tr>
      <td>/wiki-forget</td>
      <td>Remove the wiki article stored in the bot's memory.</td>
    </tr>
    <tr>
      <td>/ai-qna</td>
      <td>Ask wiki any question about the article it is currently reading (see /wiki-read).</td>
    </tr>
    <tr>
      <td>/game-recommendation</td>
      <td>A hidden feature, suggests a social game for you and your coworkers to play!</td>
    </tr>
  </tbody>
</Table>
        </Container>
     
        </>
    )
}