CREATE FUNCTION Login (@userName NVARCHAR(100), @password NVARCHAR(100)) RETURNS TABLE AS RETURN (
    SELECT
        *
    FROM
        dbo.account
    WHERE
        userName = @userName
        AND password = @password
);
GO

CREATE FUNCTION Signin (@userName NVARCHAR(100), @password NVARCHAR(100)) RETURNS TABLE AS RETURN (
    SELECT
        *
    FROM
        dbo.account
    WHERE
        userName = @userName
        AND password = @password
);
GO

    -- how to use:
SELECT
    *
FROM
    Login('laduchai', '123');


CREATE FUNCTION GetAccount (@userId INT) RETURNS TABLE AS RETURN (
    SELECT
        *
    FROM
        dbo.account
    WHERE
        id = @userId     
);
GO

CREATE FUNCTION GetContacts (@userId INT) RETURNS TABLE AS RETURN (
    SELECT
        *
    FROM
        dbo.contact
    WHERE
        userId = @userId     
);
GO