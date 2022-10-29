import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
      const { _id, title, author, details, image_url, total_view } = news;
      return (
            <Card className="">
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                              {details.length > 250 ?
                                    <p>{details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read More</Link></p> :
                                    <p>{details}</p>
                              }
                        </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

      );
};

export default NewsSummaryCard;