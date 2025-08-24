ALTER FUNCTION GetProductWithId (@id INT) RETURNS TABLE AS RETURN (
    SELECT
        *
    FROM
        dbo.product
    WHERE
        id = @id
);
GO