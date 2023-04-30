create database database_links;
drop database database_links;
create table users(
    id int(11) primary key auto_increment,
    fullname varchar(100) not null,
    email varchar(60) not null,
    password varchar(60) not null,
    create_at timestamp not null default current_timestamp
);


describe users;
--Links Table
create table links(
    id int(11) primary key  auto_increment,
    title varchar(150) not null,
    url varchar(255) not null,
    description text,
    user_id int(11),
    created_at timestamp not null default current_timestamp,
    constraint fk_user foreign key(user_id) references users(id)
)

select * from links;