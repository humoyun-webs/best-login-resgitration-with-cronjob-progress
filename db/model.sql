create extension if not exists "uuid-ossp";

create type user_role as enum('user','owner', 'admin');


create table users(
    user_id uuid primary key default uuid_generate_v4() null,
    name varchar(32) not null,
    l_name varchar(32) not null,
    age int not null,
    role user_role not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default null,
    isDelete BOOLEAN NOT NULL DEFAULT FALSE 
);

create table task (
pupil_id uuid primary key default uuid_generate_v4() null,
title varchar(32) not null,
user_id uuid not null,
descr text not null,
created_at timestamp default current_timestamp, 
    foreign key (user_id) references users(user_id) on delete cascade,
    updated_at timestamp default null,
    isDelete BOOLEAN NOT NULL DEFAULT FALSE
);