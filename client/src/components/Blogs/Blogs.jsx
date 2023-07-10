/* eslint-disable react/no-unescaped-entities */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div>
      <Header></Header>
      <h2 className="text-5xl text-center my-6">Blogs</h2>
      <div className="mx-8 md:mx-12 p-4 md:p-12">
        <p className="text-2xl mb-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </p>
        <p className="ml-4">
          - An access token is a short-lived credential used for authentication
          and authorization of user access to protected resources or APIs. It is
          sent with each request to prove the user's identity. On the other
          hand, a refresh token is a long-lived credential used to obtain a new
          access token when the original token expires, eliminating the need for
          the user to re-authenticate. Refresh tokens are typically stored
          securely, such as in an HTTP-only cookie, while access tokens can be
          stored in memory or local storage. It's crucial to adhere to security
          best practices and guidelines specific to your application to ensure
          the safe handling and storage of these tokens.
        </p>
        <p className="text-2xl mb-2">Compare SQL and NoSQL databases?</p>
        <p className="ml-4">
          - SQL and NoSQL databases differ in their data models, query
          languages, scalability, flexibility, and use cases. SQL databases have
          a structured schema, use SQL as the query language, and are vertically
          scalable. They excel in complex querying, transactions, and data
          consistency. NoSQL databases are schema-less, employ various data
          models, have different query languages, and are horizontally scalable.
          They are flexible, handle unstructured data well, and are suitable for
          large-scale applications with evolving data requirements. The choice
          between SQL and NoSQL depends on specific needs and characteristics of
          the application. Hybrid solutions that combine both types are also
          emerging.
        </p>
        <p className="text-2xl mb-2">
          What is express js? What is Nest JS (google it)?
        </p>
        <p className="ml-4">
          - Express.js is a minimalist and flexible web framework for Node.js
          that provides a simple and unopinionated approach to building web
          applications and APIs. It offers freedom and control over the
          application structure and components, focusing on simplicity and a
          middleware-based architecture.
          <br />
          NestJS, on the other hand, is a progressive and opinionated framework
          for building scalable and maintainable server-side applications with
          Node.js. Inspired by Angular, it embraces TypeScript and follows a
          structured and modular architecture based on modules, controllers, and
          services. NestJS promotes convention over configuration and includes
          features like decorators, middleware, data validation, and support for
          GraphQL and WebSockets.
        </p>
        <p className="text-2xl mb-2">
          What is MongoDB aggregate and how does it work (google it)?
        </p>
        <p className="ml-4">
          - The aggregate function in MongoDB allows for advanced data
          processing and analysis operations on collections. It works through a
          pipeline-based approach, where stages are defined to perform
          operations on the data. Stages include filtering, grouping,
          projecting, sorting, joining, and more. The aggregate function
          processes the data in the collection based on the defined stages and
          returns the resulting data. The MongoDB aggregation framework offers a
          wide range of operators and functions for performing calculations,
          transformations, and aggregations efficiently. It is particularly
          useful for handling large datasets and performing complex aggregations
          within the database.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
