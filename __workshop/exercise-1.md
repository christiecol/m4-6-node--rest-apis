# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of what it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

`/customers` | `GET` | Retreive your list of customers
`/customers/:id` | `GET` | Retreive a specific customer by id
`/customers/:id` | `POST` | Add a new customer to the list
`/customers/:id` | `PUT` | Update existing customer
`/customers/:id` | `PATCH` | Edit a portion of specific customer's profile
`/customers/:id` | `DELETE` | Delete an existing customer
`/products` | `GET` | Retreive your list of products
`/products/:id` | `GET` | Retreive a specific pruduct by id
`/products/:id` | `POST` | Add a new product
`/customers/:id` | `PUT` | Update existing product
`/products/:id` | `PATCH` | Update a portion of a specific product's information, ex: price
`/products/:id` | `DELETE` | Delete an existing product
`/stock` | `GET` | Retreive your list of stock
`/stock:id` | `GET` | Retreive a specific stock item
`/stock:id` | `PUT` | Create a new stock item
`/stock/:id` | `DELETE` | Delete an existing stock item
