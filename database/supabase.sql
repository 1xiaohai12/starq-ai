CREATE TABLE orders(
id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
order_no varchar(50),
email varchar(255),
product varchar(50),
amount integer,
status varchar(30),
created_at timestamp DEFAULT now()
);
