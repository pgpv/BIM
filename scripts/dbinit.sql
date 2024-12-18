create database bim;

\c bim;

create type process as enum ('traditional', 'modern', 'hybrid');
create type grape as enum ('concord', 'thompson', 'ren', 'ruby', 'alexander');

create table winemaker(
	id uuid,
	name varchar(64) primary key, /* this is the primary key just to make data insertion and testing easier */
	location varchar(64)
);

create table crop(
	id varchar(64) primary key, /* no uuid just to make data insertion and testing easier */
    grape grape,
    picking_year smallint,
    quantity integer
);

create table label(
    id varchar(64) primary key, /* no uuid just to make data insertion and testing easier */
    designer varchar(64),
	picture varchar(64),
	body text
);

create table wine(
     id uuid,
     name varchar(64) primary key, /* this is the primary key just to make data insertion and testing easier */
     winemaker varchar(64) references winemaker(name),
     crop varchar(64) references crop(id),
     bottling_year smallint,
     quantity integer,
     label varchar(64) references label(id)
);

insert into winemaker (id, name, location) values (gen_random_uuid(), 'jacques', 'paris' );
insert into winemaker (id, name, location) values (gen_random_uuid(), 'manuel', 'lisbon' );
insert into winemaker (id, name, location) values (gen_random_uuid(), 'luca', 'rome' );

insert into crop (id, grape, picking_year, quantity) values ( 'crop1', 'concord', 2001, 1000 );
insert into crop (id, grape, picking_year, quantity) values ( 'crop2', 'thompson', 2002, 2000 );
insert into crop (id, grape, picking_year, quantity) values ( 'crop3', 'ren', 2003, 3000 );
insert into crop (id, grape, picking_year, quantity) values ( 'crop4', 'ruby', 2004, 4000 );
insert into crop (id, grape, picking_year, quantity) values ( 'crop5', 'alexander', 2005, 5000 );
insert into crop (id, grape, picking_year, quantity) values ( 'crop6', 'alexander', 2006, 6000 );

insert into label (id, designer, picture, body) values ('label1', 'bob, the designer', 'this is just text, not a picture', 'this wine is amazing and you should buy it' );
insert into label (id, designer, picture, body) values ('label2', 'bob, the designer', 'this is just text, not a picture', 'this wine is brilliant and you should buy it' );
insert into label (id, designer, picture, body) values ('label3', 'bob, the designer', 'this is just text, not a picture', 'this wine is fantastic and you should buy it' );

insert into wine (id, name, winemaker, crop, bottling_year, quantity, label) values (gen_random_uuid(), 'frenchwine', 'jacques', 'crop1', 2005, 5000, 'label1' );
insert into wine (id, name, winemaker, crop, bottling_year, quantity, label) values (gen_random_uuid(), 'portuguesewine', 'manuel', 'crop2', 2004, 4000, 'label2' );
insert into wine (id, name, winemaker, crop, bottling_year, quantity, label) values (gen_random_uuid(), 'italianwine', 'luca', 'crop3', 2003, 3000, 'label3' );
