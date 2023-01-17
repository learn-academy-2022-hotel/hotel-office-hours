Challenges: SQL Country Database
Save your queries in a file if you want to keep them for posterity.

WHERE

What is the population of the US? (HINT: 278357000)
```sql
SELECT name, population
FROM country
WHERE name = 'United States'
```

What is the area of the US? (HINT: 9.36352e+06)
```sql
SELECT name, surfacearea
FROM country
WHERE name = 'United States'
```

Which countries gained their independence before 1963?
121 entries
```sql
SELECT name
FROM country
WHERE indepyear < 1963
```

List the countries in Africa that have a population smaller than 30,000,000 and a life expectancy of more than 45? (HINT: 37 entries)
```sql
SELECT name
FROM country
WHERE continent = 'Africa' AND population < 3e7 AND lifeexpectancy > 45
```

Which countries are something like a republic? (HINT: Are there 122 or 143?)
143 entries
```sql
SELECT name
FROM country
WHERE governmentform LIKE '%Republic%'
```
Which countries are some kind of republic and achieved independence after 1945? (HINT: 92 entries)
```sql
SELECT name
FROM country
WHERE governmentform LIKE '%Republic%' AND indepyear > 1945
```

Which countries achieved independence after 1945 and are not some kind of republic? (HINT: 27 entries)
```sql
SELECT name, governmentform
FROM country
WHERE NOT(governmentform LIKE '%Republic%') AND indepyear > 1945
```

ORDER BY

Which fifteen countries have the lowest life expectancy? (HINT: starts with Zambia, ends with Sierra Leonne)
```sql
SELECT name, lifeexpectancy
FROM country
ORDER BY lifeexpectancy
LIMIT 15
```

Which fifteen countries have the highest life expectancy? (HINT: starts with Andorra, ends with Spain)
```sql
SELECT name, lifeexpectancy
FROM country
WHERE lifeexpectancy IS NOT NULL
ORDER BY lifeexpectancy DESC
LIMIT 15
```

Which five countries have the lowest population density (density = population / surfacearea)? (HINT: starts with Greenland)


Which countries have the highest population density?(HINT: starts with Macao)

Which is the smallest country by area? (HINT: .4)

Which is the smallest country by population? (HINT: 50)?

Which is the biggest country by area? (HINT: 1.70754e+07)

Which is the biggest country by population? (HINT: 1277558000)

Who is the most influential head of state measured by population? (HINT: Jiang Zemin)


Subqueries: WITH

Of the countries with the top 10 gnp, which has the smallest population? (HINT: Canada)
```sql
WITH small_pop AS (
  SELECT name, gnp, population
  FROM country
  ORDER BY gnp
  LIMIT 10
)
SELECT *
FROM small_pop
ORDER BY population
LIMIT 1
```

Of the 10 least populated countries with permament residents (a non-zero population), which has the largest surfacearea? (HINT: Svalbard and Jan Mayen)


Aggregate Functions: GROUP BY

Which region has the highest average gnp? (HINT: North America)
```sql
-- https://stackoverflow.com/questions/21365622/postgres-using-order-by-on-an-avg-function

SELECT region, AVG(gnp)
FROM country
GROUP BY region
ORDER BY 2 DESC
LIMIT 1
```

Who is the most influential head of state measured by surface area? (HINT: Elisabeth II)
```sql
SELECT headofstate, SUM(surfacearea)
FROM country
GROUP BY headofstate
ORDER BY 2 DESC
LIMIT 1
```

What is the average life expectancy for all continents?
What are the most common forms of government? (HINT: use count(*))
How many countries are in North America?
What is the total population of all continents?

Stretch Challenges
Which countries have the letter ‘z’ in the name? How many?
Of the smallest 10 countries by area, which has the biggest gnp? (HINT: Macao)
Of the smallest 10 countries by population, which has the biggest per capita gnp?
Of the biggest 10 countries by area, which has the biggest gnp?
Of the biggest 10 countries by population, which has the biggest per capita gnp?
What is the sum of surface area of the 10 biggest countries in the world? The 10 smallest?
What year is this country database from? Cross reference various pieces of information to determine the age of this database.
